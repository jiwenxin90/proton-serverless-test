exports.list_ids = async (event, context, callback) => {
    console.log("list ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 11
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.list_tasks = async (event, context, callback) => {
    console.log("list ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 11
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.create_ids = async (event, context, callback) => {
    console.log("create ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 12
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.get_ids = async (event, context, callback) => {
    console.log("get ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 13
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.delete_ids = async (event, context, callback) => {
    console.log("delete ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 14
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};

exports.update_ids = async (event, context, callback) => {
    console.log("update ids");
    let response = {
        statusCode: 200,
        headers: {
            "x-custom-header" : "my custom header value"
        },
        body: JSON.stringify({
            value: 15
        })
    };
    console.log("response: " + JSON.stringify(response))
    return response;
};
