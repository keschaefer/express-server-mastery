# [Our Deployed Server](https://protected-headland-83497.herokuapp.com/)

# Express: Servers & CRUD Pairing

Today you will be working together with someone else in your cohort to produce an Express server with full CRUD functionality for 2 collections of resources. Your goal is to complete this by the end of the day, but if you do not finish that is ok (you can work it out with your partner to finish over the weekend or next week).

## Requirements

* **Working Express Server**

* **GET all routes for both resources that returns json with a root key that identifies the resource, ex.**

```json
{ 
  "cakes":
    [{
      "id": 1,
      "name": "Butter Cake",
      "imageUrl": "https://assets.epicurious.com/photos/575991f3973781fc02c2a827/6:4/w_620,h_413,c_limit/EP_06062016_Vanilla-Buttermilk-Wedding-Cake-with-Raspberries-and-Orange-Cream-Cheese-Frosting.jpg",
      "description": "Any recipe for cake that begins 'cream butter and sugar' is a butter cake. After the creaming, you add eggs to aerate the batter a bit, flour (and sometimes another liquid, like milk) to give it structure and texture, and baking powder or baking soda to ensure that it rises in the oven. Different types of cake batter within the butter cake family include chocolate, white, yellow and marble; for white and yellow cakes coloring typically depends on whether they have whole eggs, or extra egg yolks in them (yellow cake) or egg whites only (white cake)."
    }, {
      "id": 2,
      "name": "Pound Cake",
      "imageUrl": "https://assets.epicurious.com/photos/57c6f789082060f11022b586/6:4/w_620,h_413,c_limit/no-recipe-required-pound-cake-lemon-poppy-seed-30082016.jpg",
      "description": "Pound cake is a relative of butter cake. It's so called because it can be measured as a matter of proportion: a pound of butter, a pound of sugar, a pound of eggs, and a pound of flour. In some pound cake recipes, you'll see the eggs separated and the egg whites whipped and folded into the batter, to leaven it; in other recipes you'll find leaveners like baking soda and baking powder, bringing it well into the butter-cake fold. These cakes are usually very lightly flavored and served plain or topped with a simple glaze or water icing. A pound cake is usually baked in a loaf or Bundt pan. Many coffee cakes, sour cream cakes, and fruit crumb cakes are variations of pound cake."
    }]
}
```

And

```json
{
  "students":
    [{
      "id": 1,
      "name": "Ryan Holly",
      "cohort": "g99"
    }, {
      "id": 2,
      "name": "Christopher Edgar",
      "cohort": "g99"
    }]
}
```

* **GET one routes that use the request ID parameter to return one resource with a root key that identifies the resource, ex.**

```json
{
  "cake":
    {
      "id": 4,
      "name": "Genoise Cake",
      "imageUrl": "https://assets.epicurious.com/photos/5af339265e455d485852fba6/6:4/w_620,h_413,c_limit/EP_06012016_strawberry_shortcake_hero-slices.jpg",
      "description": "In Italy and France, a sponge cake is called genoise; in genoise, whole eggs are beaten with sugar until they're thick and ribbony, and then flour (and sometimes butter) is added and the batter is baked; the result is wonderful baked in a round cake pan and simply frosted, but genoise is also pliable enough to be baked in a jelly-roll pan and rolled up into a roulade."
    }
}
```

And

```json
{
  "student":
    {
      "id": 3,
      "name": "Kyle Czajkowski",
      "cohort": "g99"
    }
}
```

* **POST routes for both resources that use the request body to add a new resource to the collection, and return the newly POSTED resource.**

* **PUT routes for both resources that use the request ID parameter and the request body to find one resource in the collection, update it, and return the UPDATED resource.**

* **DELETE routes for both resources that use the request ID to find one resource in the collection, delete it, and return the DELETED resource.**

* **All of your routes should be modular**
  - Use a routes folder
  - Separate route files for each collection of resources
  - Use express.Router() & module.exports

* **Your server should have proper error handling**
  - 404 'not found' error handler
  - General purpose error handler

* **Your server should be deployed**
  - Test and develop your server locally
  - Deploy once you have some features working

* **Your server should include CORS middleware to allow cross origin requests**

* **Use proper github workflow**
  - Commit early
  - Commit often
  - Each person in your pair should have commits on the repo

## Notes

* **Remember your pair programming principles**
  - Be repectful
  - Be patient
  - Be kind
  - Switch driver/navigator roles regularly (every 20 mins or so)

* **If you run into issues, help each other gain understanding**
  - And take note of what 'tripped you up'

* **I encourage you to make a cheat sheet/cheat sheets as you go along so you have a reference document for the future**

## HAVE FUN!!!