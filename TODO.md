# Form - Checkout 
=================

```
    fields: [ names of fields and types ]
    errors: [ errors for fields, for each validation can have an error  ]
    validation: [ list of field names ]
    submitAttempted: true | false
    messages: [ 'form sent successfully', 'global error cannot send' ...others ] 
    status:  'clean' | 'dirty' | 'complete'
```

## Behaviours
=============
```
    savedAddresses:
        * populate fields with values

    handlePostCode:
        * needs to take postcode and produce selected address details

    handleSubmit:
        * prevent default,
        * validateForm(fieldNames),
        * send error? ,
        * set disabled while processing,
        * remove disabled if failed,
        * send data to endpoint 

    handleResponse:
        * has error? -> remove disabled if failed
        * has complete? -> send data to endpoint 

    handePasteEvent: // Do not forget this one
    handleChange: // This is likely the default
    handleKeyUp: // Try not to do too many updates consider throttling
```

## utils
========
```
    validateField:
        * one for each -> error(name)
        * switch case by fieldName
    validateForm:
        * for all field names -> validateField(name)
```

## specs for checkout
=====================

```
submit example: fields
======================
    "_token": "XVLN8AzAymLldmQ9UmNyXeTmLTHJcGieTkb8gsi7",
    "email_address": "chris.clarke@internetfusion.co.uk",
    "deliver_first_name": "Chris",
    "deliver_last_name": "Clarke",
    "delivery_telephone": "729947",
    "delivery_country": "UK",
    "delivery_search": "N1 5DS",
    "delivery_address_1": "Flat 1-3",
    "delivery_address_2": "70 Bridport Place",
    "delivery_city": "London",
    "delivery_postcode": "N1 5DS",
    "billing_same_as_delivery": "on",
    "billing_first_name": "Chris",
    "billing_last_name": "Clarke",
    "billing_telephone": "729947",
    "billing_country": "UK",
    "billing_search": "N1 5DS",
    "billing_address_1": "Flat 1-3",
    "billing_address_2": "70 Bridport Place",
    "billing_city": "London",
    "billing_postcode": "N1 5DS",
    "deliveryMethod": "on",
```

## Error text 
=============

````
    errors: [
        'Please enter your email address.',
        'Please enter your first name.',
        'Please enter your last name.',
        'Please enter your contact number.',
        'Please enter your first name.',
        'Please enter your last name.',
        'Please enter your contact number.',
        'Please enter the first line of your address.',
        'Please enter your town/city.',
        'Please enter your post/zip code.',
    ];
```