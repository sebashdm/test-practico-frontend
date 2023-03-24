const axios = require('../axios');
const author = require('../utils/author');
const errors = require('../utils/errors');
const {
    getCategoryId,
    formattedItems,
    getItemsDescriptions,
} = require('../utils/shemas');


    const getItems = async (req, res) => {
    const itemName = req.query.q;
    if (!itemName) return res.status(400).json(errors.empty_query);

    try {
        const { data: itemsList } = await axios.get(`/sites/MLA/search?q=${itemName}&limit=4`);
        const { filters, available_filters, results } = itemsList;

        if (!results.length) return res.status(404).json(errors.not_found);

        let categories = [];

        if (filters.length) {
            const { path_from_root } = filters[0].values[0];
            categories = path_from_root.map((category) => category.name);
        } else {
            const catId = getCategoryId(available_filters);
            const { data } = await axios.get(`/categories/${catId}`);
            const { path_from_root } = data;
            categories = path_from_root.map((category) => category.name);
        }

        const items = results.map((item) => formattedItems(item));
        const formattedObject = { author, categories, items };
        return res.json(formattedObject);
    } catch (error) {
        return res.status(500).json(errors.internal_error);
    }
};

    const getItemstInfo = async (req, res) => {
    const { id } = req.params;

    try {
        const { data: itemData } = await axios.get(`/items/${id}`);
        const { data: categoryData } = await axios.get(`/categories/${itemData.category_id}`);
        const { path_from_root } = categoryData;
        const categories = path_from_root.map((cat) => cat.name);

        let itemDescription = {};
        try {
            const { data } = await axios.get(`/items/${id}/description`);
            itemDescription = data;
        } catch (err) {
            itemDescription = { plain_text: 'Producto sin descripción.' };
        }

        const item = getItemsDescriptions(itemData, itemDescription.plain_text);
        const formattedObject = { author, item, categories };
        return res.json(formattedObject);
    } catch (error) {
        if (error.message.endsWith('404')) {
            return res.status(404).json(errors.not_found);
        }
        return res.status(500).json(errors.internal_error);
    }
};

module.exports = { getItems, getItemstInfo };
