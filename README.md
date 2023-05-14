### How to use the generator for Blob Celestia Pay

Demo Link: 
http://185.207.251.195:4001


Make sure to run the UI server on the Celestia node gateway server with port 26659 and enough balance to guarantee that this UI functions properly.

----
Here is the result:


## UI PFB

![My Image](https://i.imgur.com/OKglB84.jpg)


## Result For PFB
![My Image](https://i.imgur.com/HwcyACF.jpg)



Step For Installation


```bash 
curl http://deb.nodesource.com/setup_lts.x | sudo bash -

sudo apt install git nodejs -y

```

Instal Dependencies
``` bash
sudo apt install npm

npm install child_process

npm install express
```

Cloning the repository
```bash
git clone https://github.com/jordi-stack/celestia_submitpfb
``` 

Head to folder that cloned above
```bash
cd celestia_submitpfb
```

Run the module
```
node main.js
```

Finally now you are success run the module of PFB
if you generate and submit tx, it will apear on your VPS screen

![My Image](https://i.imgur.com/2ry9SeX.jpg)
---
---
Thank you.
