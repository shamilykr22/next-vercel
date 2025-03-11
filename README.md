## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.


## 
1. npx create-next-app@latest
2. cd nextjs-dashboard
3. npm install
4. npm run dev


Routing files 
*********************

layout -> 	.js .jsx .tsx	Layout  -> RootLayout for /app folder root level layout
page	->  .js .jsx .tsx	Page
loading	-> .js .jsx .tsx	Loading UI
not-found	-> .js .jsx .tsx	Not found UI
error	-> .js .jsx .tsx	Error UI
global-error	-> .js .jsx .tsx	Global error UI
route	-> .js .ts	API endpoint
template	.js .jsx .tsx	Re-rendered layout
default

Nested routes
*********************

folder	-> Route segment
folder/folder	-> Nested route segment


Dynamic routes
*************************

[folder]	-> Dynamic route segment
[...folder]	-> Catch-all route segment
[[...folder]]	Optional catch-all route segment

Route Groups and private folders
*****************************************

(folder)	Group routes without affecting routing
_folder	Opt folder and all child segments out of routing

