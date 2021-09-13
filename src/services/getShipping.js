export default async function getShipping(params) {
    try {
        // Endpoint details
        // ======================================================
        // https://www.api.surfdome.com/en-UK/order/index.php
        // ?bJSON=true
        // &mode=get_delivery
        // &city=London
        // &countryID=1
        // &postcode=n15DS
        // &arrJSONBasketItems=%7B%221113213%22:1%7D
    
        const endpoint = `https://www.api.surfdome.com/en-UK/order/index.php`;

        // const {
        //     bJSON = 'true',
        //     mode = 'get_delivery',
        //     city = 'London',
        //     countryID = '1',
        //     postcode = 'n15DS',
        //     arrJSONBasketItems = '%7B%221113213%22:1%7D'
        // } = params;
        
        let url = new URL(endpoint);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        // {"success":"false","rates":[],"warnings":[],"errors":[{"title":"Service Unavailable","msg":"There aren't any items for delivery."}],"vat_percentage":20,"Time":{"#1":"0.00","#2":"0.00","#3":"0.00","#4":"0.00","#5":"0.00","#6":"0.00","#7":"0.00","#8":"0.40"}}

        return fetch(url, {
            method: 'GET'
        })
        .then(response => response.json())
        // .then(response => {
        //     if (response.success === "false") {
        //         console.error("getShipping FAILED: ", response);
        //     }
        //     console.log(response);
        //     return response;
        // });

        // return {
        //     "success": "ok",
        //     "rates": {
        //         "TPL-E": {
        //             "service": "royal-mail",
        //             "logo": "\/shared_images\/icons\/delivery\/royal-mail.png",
        //             "value": "TPL-E",
        //             "data-priority": "E",
        //             "data-rate": "2.99",
        //             "data-gbp-rate": "2.99",
        //             "title": "Royal Mail Standard Tracked",
        //             "etaMessage": "Est. arrival by Fri 30th Apr",
        //             "description": "Standard Tracked Service from Royal Mail",
        //             "price": "&pound;2.99"
        //         },
        //         "TPM-P": {
        //             "service": "royal-mail",
        //             "logo": "\/shared_images\/icons\/delivery\/royal-mail.png",
        //             "value": "TPM-P",
        //             "data-priority": "P",
        //             "data-rate": "4.99",
        //             "data-gbp-rate": "4.99",
        //             "title": "Royal Mail Priority Tracked",
        //             "etaMessage": "Est. arrival by Wed 28th Apr",
        //             "description": "Priority Tracked Service from Royal Mail",
        //             "price": "&pound;4.99"
        //         },
        //         "DPD12-P": {
        //             "service": "dpd",
        //             "logo": "\/shared_images\/icons\/delivery\/dpd.png",
        //             "value": "DPD12-P",
        //             "data-priority": "P",
        //             "data-rate": "5.99",
        //             "data-gbp-rate": "5.99",
        //             "title": "DPD Priority Before 12:00",
        //             "etaMessage": "Guaranteed on Wed 28th Apr",
        //             "description": "DPD delivery before 12:00",
        //             "price": "&pound;5.99"
        //         },
        //         "DPDSA-P": {
        //             "service": "dpd",
        //             "logo": "\/shared_images\/icons\/delivery\/dpd.png",
        //             "value": "DPDSA-P",
        //             "data-priority": "P",
        //             "data-rate": "5.99",
        //             "data-gbp-rate": "5.99",
        //             "title": "DPD Saturday Delivery",
        //             "etaMessage": "Guaranteed on Sat 1st May",
        //             "description": "DPD Saturday Delivery",
        //             "price": "&pound;5.99"
        //         },
        //         "DPDSU-P": {
        //             "service": "dpd",
        //             "logo": "\/shared_images\/icons\/delivery\/dpd.png",
        //             "value": "DPDSU-P",
        //             "data-priority": "P",
        //             "data-rate": "5.99",
        //             "data-gbp-rate": "5.99",
        //             "title": "DPD Sunday Delivery",
        //             "etaMessage": "Guaranteed on Sun 2nd May",
        //             "description": "DPD Sunday Delivery",
        //             "price": "&pound;5.99"
        //         }
        //     },
        //     "warnings": [],
        //     "errors": [],
        //     "vat_percentage": 20,
        //     "Time": {
        //         "#1": "0.00",
        //         "#2": "0.01",
        //         "#3": "0.00",
        //         "#4": "0.00",
        //         "#5": "0.00",
        //         "#6": "0.00",
        //         "#7": "0.00",
        //         "#8": "0.51"
        //     },
        //     "noVAT": false,
        //     "vat_rate": "0.200"
        // }
    
    } catch (err) {
        console.error(err);
        return { error: err };
    }
};
