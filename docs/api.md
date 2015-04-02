# QPon API

### [GET] /coupons

List all coupons

###### Params

|       name      |         description   | Required? |  Default |
|-----------------|-----------------------|-----------|----------|
|     `page`      |  Page number          |     false |     1    |
|     `records`   |  Records per page     |     false |     15   |

---

### [GET] /coupons/search

Search coupon

###### Params

|       name      |         description                    |  Required? |  Default | 
|-----------------|----------------------------------------|------------|----------|
|     `keyword`   |  Keyword to match                      |  true      |    N/A   |
|     `field`     |  Field to match. One of `title`.       |   false    |   "title"|