# docker-prod
 pre-requirement : 

         1) pull your mongo image using above command

         2) build the service container image 

              ubuntu # sudo docker build -t nodeservice .

         3) docker-compose up

       Now your container will start running . 

     

     Test API :

         1) get : hostaddress:5000/

         2) post : hostaddress:5000/customer        

   request Body : hostaddress:5000/customer 
                         
         {
	    "name":"test"
	}
	
   "Root location ":"npm root -g"
