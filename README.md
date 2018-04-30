## Sample project for Star Wars themed people Data
This is image will be published to andyianriley/star-wars-people-lookup.

To use this image locally build the image.
```
docker-compose build
docker-compose up
```
Then you will be able to reference it in other dockerfiles.

You can set environment variables PORT, default 9001 base uri is http://localhost:9002/people.

Sample query

http://localhost:9002/people/Luke%20Skywalker

response 

```json
{  
   "vehicle_vrm":"XW1NG",
   "name":"Luke Skywalker",
   "force":"jedi"
}
```