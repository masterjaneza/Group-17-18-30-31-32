// let topic = prompt('Enter topic: ');

// if(topic.toLowerCase() == 'programming') {
//     console.log('About Programming ...')
// } else if(topic.toLowerCase() == 'sport') {
//     console.log('About Sport...')
// } else if(topic.toLowerCase() == 'phylosopy') {
//     console.log('About Phylosopy...')
// } else if(topic.toLowerCase() == 'graphic design') {
//     console.log('About Graphic Design...')
// }  else if(topic.toLowerCase() == 'ai & algorithm') {
//     console.log('About AI & Algorithm...')
// } else {
//     console.log('Please Enter avaliable topic!')
// };





let topic = prompt('Enter topic: ');

switch(topic) {
    case 'programming':
    case '1':
        console.log('About Programming ...');
        break;
    case 'sport':
        console.log('About Sport ...');
        break;    
    case 'phylosopy':
        console.log('About phylosopy ...');
        break;    
    case 'graphic design':
        console.log('About graphic design ...');
        break;
    case 'ai & algotihm':
        console.log('About ai & algotihm...');
        break;
    default:
        console.log('Please Enter avaliable topic!')  
}