
function megaFriend(friendsName) {
    let maxName=friendsName[0];

    for (let i = 0; i < friendsName.length; i++) {
        const element = friendsName[i];
        if (element>maxName) {
            maxName=element;
        }
    }
    return maxName;
}
let friendsName = ['Fahim', 'Shahriar', 'Setu'];
var result=megaFriend(friendsName);
console.log(result);