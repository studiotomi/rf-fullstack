# The good, the bad, the ugly.

For some arbitrary reason, an api that you deal with will return nested json objects when doing a GET call, but requires these nested objects to be flattened before being sent in a PUT request.

Write a function that takes as an input a javascript object, like figure 1, and transforms it into a flattened structure like figure 2:

## figure 1

    # Payload returned on a GET request
    {
        "description": "I am a business",
        "details": {
            "city": "austin",
            "state": "tx"
        },
        "images": {
            "thumbnail": {
                "title": "some arbitrary title",
                "url": "http://someimageurl",
            },
            "large": {
                "title": "some arbitrary title",
                "url": "http://someimageurl",
            }
        }
    }

## figure 2

    # Payload required for a PUT request
    {
        "description": "I am a business",
        "details-city": "austin",
        "details-state": "tx"
        "images-thumbnail-title": "some arbitrary title",
        "images-thumbnail-url": "http://someimageurl",
        "images-large-title": "some arbitrary title",
        "images-large-url": "http://someimageurl",
    }

