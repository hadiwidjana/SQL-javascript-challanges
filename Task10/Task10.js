const ApiResponse = {
    username: "andi",
    password: "andi123",
    lastname: "siahaan"
};

const requirement = ["username","password"];
var outputObject = {};

function sanitizeBody(ApiResponse,requirement){
    for (let i=0;i<requirement.length;i++){
        outputObject[requirement[i]]= ApiResponse[requirement[i]]
    }

    return outputObject
}

console.log(sanitizeBody(ApiResponse,requirement));