let statusCode : number = 404;
let message : string ;
// Tulis kode switch statement di sini

switch (statusCode){
    case 200 :
     message = "OK";
      break;
      case 404 :
        message  = "Not Found";
        break;
        case 500 :
            message  = "Internal Server Error";
            break;
            case 403 :
                message  = "Forbiden";
                break;
                default:
                message  = "Unknown Status";
}
            console.log (`Status ${statusCode} : ${message}`);