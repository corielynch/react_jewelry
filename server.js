const csvtojson = require('csvtojson'); 
const mysql = require("mysql2"); 
  

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

<<<<<<< HEAD
// Routes
// =============================================================
// require("./app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);
=======
// Test MySQL
// Importing mysql and csvtojson packages 
// Requiring module 


  
con.connect((err) => { 
    if (err) return console.error( 
            'error: ' + err.message); 
  
    con.query("DROP TABLE sample",  
        (err, drop) => { 
  
        // Query to create table "sample" 
        var createStatament =  
        "CREATE TABLE sample(Name char(50), " + 
        "Email char(50), Age int, city char(30))"
  
        // Creating table "sample" 
        con.query(createStatament, (err, drop) => { 
            if (err) 
                console.log("ERROR: ", err); 
        }); 
    }); 
}); 
  
// CSV file name 
const fileName = "./Database/MonaAssemi-Product-list.csv"; 
  
csvtojson().fromFile(fileName).then(source => { 
  
    // Fetching the data from each row  
    // and inserting to the table "sample" 
    for (var i = 0; i < source.length; i++) { 
        var Handle = source[i]["Handle"], 
        Title = source[i]["Title"], 
        BodyHTML = source[i]["BodyHTML"], 
        Vendor = source[i]["Vendor"],
        Type = source[i]["Type"], 
        Tags = source[i]["Tags"], 
        Published = source[i]["Published"], 
        Option1Name = source[i]["Option1 Name"], 
        Option1Value = source[i]["Option1 Value"], 
        Option2Name = source[i]["Option2 Name"], 
        Option2Value = source[i]["Option2 Value"], 
        Option3Name = source[i]["Option3 Name"], 
        Option3Value = source[i]["Option3 Value"], 
        VariantSKU = source[i]["Variant SKU"], 
        VariantGrams = source[i]["Variant Grams"], 
        VariantInventoryTracker = source[i]["Variant Inventory Tracker"], 
        VariantInventoryQty = source[i]["Variant Inventory Qty"], 
        VariantInventoryPolicy = source[i]["Variant Inventory Policy"], 
        VariantFulfillmentService = source[i]["Variant Fulfillment Service"], 
        VariantPrice = source[i]["Variant Price"], 
        VariantCompareAtPrice = source[i]["Variant Compare At Price"], 
        VariantRequiresShipping = source[i]["Variant Requires Shipping"], 
        ImageSrc = source[i]["Image Src"], 
        ImagePosition = source[i]["Image Position"], 
        ImageAltText = source[i]["Image Alt Text"], 
        GiftCard = source[i]["Gift Card"], 
        SEOTitle = source[i]["SEO Title"], 
        SEODescription = source[i]["SEO Description"], 
        GoogleShoppingGoogleProductCategory = source[i]["Google Shopping / Google Product Category"], 
        GoogleShoppingGender = source[i]["Google Shopping / Gender"], 
        GoogleShoppingAgeGroup = source[i]["Google Shopping / Age Group"], 
        GoogleShoppingMPN = source[i]["Google Shopping / MPN"], 
        GoogleShoppingAdWordsGrouping = source[i]["Google Shopping / AdWords Grouping"], 
        GoogleShoppingAdWordsLabels = source[i]["Google Shopping / AdWords Labels"], 
        GoogleShoppingCondition = source[i]["Google Shopping / Condition"], 
        GoogleShoppingCustomProduct = source[i]["Google Shopping / Custom Product"], 
        GoogleShoppingCustomLabel0 = source[i]["Google Shopping / Custom Label 0"], 
        GoogleShoppingCustomLabel1 = source[i]["Google Shopping / Custom Label 1"], 
        GoogleShoppingCustomLabel2 = source[i]["Google Shopping / Custom Label 2"], 
        GoogleShoppingCustomLabel3 = source[i]["Google Shopping / Custom Label 3"], 
        GoogleShoppingCustomLabel4 = source[i]["Google Shopping / Custom Label 4"], 
        VariantImage = source[i]["Variant Image"], 
        VariantWeightUnit = source[i]["Variant Weight Unit"], 
        VariantTaxCode = source[i]["Variant Tax Code"], 
        Costperitem = source[i]["Cost per item"]


  
        var insertStatement =  
        `INSERT INTO sample values( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,  )`; 
        var items = [Handle, Title, BodyHTML, Vendor, Type, Tags, Published, Option1Name, Option1Value, Option2Name, Option2Value, Option3Name, Option3Value, VariantSKU,  VariantGrams, VariantInventoryTracker, VariantInventoryQty, VariantInventoryPolicy, VariantFulfillmentService, VariantPrice, VariantCompareAtPrice, VariantRequiresShipping, ImageSrc, ImagePosition, ImageAltText, GiftCard, SEOTitle, SEODescription, GoogleShoppingGoogleProductCategory, GoogleShoppingGender,  GoogleShoppingAgeGroup, GoogleShoppingMPN, GoogleShoppingAdWordsGrouping, GoogleShoppingAdWordsLabels, GoogleShoppingCondition, GoogleShoppingCustomProduct, GoogleShoppingCustomLabel0, GoogleShoppingCustomLabel1, GoogleShoppingCustomLabel2, GoogleShoppingCustomLabel3, GoogleShoppingCustomLabel4, VariantImage, VariantWeightUnit, VariantTaxCode, Costperitem ]; 
  
        // Inserting data of current row 
        // into database 
        con.query(insertStatement, items,  
            (err, results, fields) => { 
            if (err) { 
                console.log( 
    "Unable to insert item at row ", i + 1); 
                return console.log(err); 
            } 
        }); 
    } 
    console.log( 
"All items stored into database successfully"); 
}); 

// End MySQL test



>>>>>>> 20c287312acf0a71aa1e2684705407bac1ba0190

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });