var studentarray=[];
function submitnames() {
var name1= document.getElementById("student1name").value;
var name2= document.getElementById("student2name").value;
var name3= document.getElementById("student3name").value;
var name4= document.getElementById("student4name").value;

studentarray.push(name1)
studentarray.push(name2);
studentarray.push(name3);
studentarray.push(name4);

console.log(studentarray);

document.getElementById("displaynames").innerHTML=studentarray;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sortnames() {
studentarray.sort();
document.getElementById("displaynames").innerHTML=studentarray;
console.log(studentarray);
}

