
// modern module syntax
export async function helloUser(event, context, callback) {
    // async/await also works out of the box
    await new Promise((resolve, reject) => setTimeout(resolve, 500))

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello User'
        })
    };

    callback(null, response);
}
