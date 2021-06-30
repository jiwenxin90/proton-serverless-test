exports.list_ids = (event, context, callback) => {
    console.log("list ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 1
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.create_ids = (event, context, callback) => {
    console.log("create ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 2
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.get_ids = (event, context, callback) => {
    console.log("get ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 3
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.delete_ids = (event, context, callback) => {
    console.log("delete ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 4
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.update_ids = (event, context, callback) => {
    console.log("update ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 5
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};
