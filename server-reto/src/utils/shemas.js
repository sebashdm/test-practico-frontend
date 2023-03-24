const validConditions = {
    new: 'Nuevo',
    used: 'Usado',
    refurbished: 'Reacondicionado',
    not_specified: 'Estado sin especificar',
};

const getCategoryId = (availableFilters) => {
    const [firstFilter] = availableFilters;
    const sortedCategories = firstFilter.values.sort((a, b) => b.results - a.results);
    return sortedCategories[0].id;
  };
  
  const getDecimals = (price) => {
    return Number(price.toString().split('.')[1]) || 0;
  };

const formattedItems = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.thumbnail,
        condition: validConditions[product.condition],
        free_shipping: product.shipping.free_shipping,
        address: product.address.state_name,
    };
};

const getItemsDescriptions = (product, description) => {
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: Math.trunc(product.price),
            decimals: getDecimals(product.price),
        },
        picture: product.pictures[0].url || product.thumbnail,
        condition: validConditions[product.condition],
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        description,
    };
};

module.exports = { getCategoryId, formattedItems, getItemsDescriptions };
