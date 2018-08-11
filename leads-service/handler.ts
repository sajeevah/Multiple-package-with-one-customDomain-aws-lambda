
// modern module syntax
export async function helloLeads(event, context, callback) {
    // async/await also works out of the box
    await new Promise((resolve, reject) => setTimeout(resolve, 500))

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Leads'
        })
    };

    callback(null, response);
}
