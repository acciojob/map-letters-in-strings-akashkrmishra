//your JS code here. If required.
 let str=prompt("enter string");
let ans={};
for(let i=0;i<str.length;i++){
	if(ans[str[i]]){
		ans[str[i]].push(i);
	}else{
		ans[str[i]]=[i];
	}
}
alert(ans);
console.log(ans);