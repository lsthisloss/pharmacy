# pharmacy

SPA application developed using PERN-stack and state machine MobX.
			Picture 1. Main page of an app
![image](https://user-images.githubusercontent.com/66689123/145475806-0070f1cd-d452-433c-b1e8-11cba18cf5cd.png)

			Picture 2. The substance detail page
![image](https://user-images.githubusercontent.com/66689123/145475820-437f33cc-8d53-4793-b4c1-f708a3f50553.png)

Table 'Substance' with tables 'type' and 'drug' follows the next REST Api methods:
/get-substance
/get-substance/:id 
/post-substance
/put-substance/:id 

Table 'user' for auth and registratiton, that use jwt token for auth and crypto password in db
post /user/register
post /user/auth

Data for tables was parsed from official formular https://moz.gov.ua/uploads/ckeditor/%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8/%D0%BD%D0%B0%D0%BA%D0%B0%D0%B7/23.04/dn_792_22.04.2021_dod_2.pdf

To insert use files ".db" in repo
