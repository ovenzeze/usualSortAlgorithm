let initArr = [];
let divInitArr = document.getElementById('initArr');
let divResultArr = document.getElementById("result");
let randomArr20 = document.getElementById("randomArr1");
let randomArr5000 = document.getElementById("randomArr2");
let randomArr10000 = document.getElementById("randomArr3");
let randomArr50000 = document.getElementById("randomArr4");
let sortName = document.getElementById("sortName");
let sortNum = document.getElementById("sortNum");
let sortTime = document.getElementById("sortTime");
let tips = document.getElementById("tips");
let visualImg = document.getElementById('visualImg');
let algorithmIdeaText = document.getElementById('algorithmIdea');
let btnBubbltSort = document.getElementById("btn1");
let btnSelectionSort = document.getElementById("btn2");
let btnInsertionSort = document.getElementById("btn3");
let btnShellSort = document.getElementById("btn4");
let btnMergeSort = document.getElementById("btn5");
let btnQuickSort = document.getElementById("btn6");
let btnHeapSort = document.getElementById("btn7");
let btnCountingSort = document.getElementById("btn8");
let btnBucketSort = document.getElementById("btn9");
let btnRadixSort = document.getElementById("btn10");
let distinct1 = document.getElementById("btn11");
let distinct2 = document.getElementById("btn12");
let distinct3 = document.getElementById("btn13");


// create random array
// id:element you want to bind event
// length:length of the random array
function showInitArr(id,length){
  id.addEventListener("click",function(){
      let initTemp = "";
      let initSignle = "";
    	for (let i = 0; i < length; i++) {
    		initArr[i] = Math.round(Math.random(i)*length);
        if((i+1)%10 == 0){
          initSignle = '<span class="arr-item">'+initArr[i].toString()+'</span></br><hr>';
        }else{
          initSignle = '<span class="arr-item">'+initArr[i].toString()+'</span>';
        }
        initTemp += initSignle;
    	}
      divInitArr.innerHTML = initTemp;
  });
}
// use
showInitArr(randomArr20,20);
showInitArr(randomArr5000,5000);
showInitArr(randomArr10000,10000);
showInitArr(randomArr50000,50000);

// sort and updata DOM
// id:the element you want to bind event
// method:the sort function you wang to use
// name:the sort algorithm you used
function showResult(id,method,name){
  id.addEventListener("click",function(){
    	let initTemp = "";
    	let initSignle = "";
    	let length = initArr.length;
      let beginTime = (new Date()).getTime();
      console.log("正在排序");
      let initArrCopy = initArr.slice(0); //slice会复制原数组，splice会切割（改变）原数组，数组保存的是引用类型
      let sortedArr = method(initArrCopy);
      initArrCopy = initArr.slice(0);
      console.log("排序完成");
      sortName.innerText = id.value;
      sortNum.innerText = length;
      sortTime.innerText = (new Date()).getTime() - beginTime;
    	for (let i = 0; i < length; i++) {
        (i+1)%10 == 0 ? initSignle = '<span class="arr-item-sorted">'+sortedArr[i].toString()+'</span></br><hr>':initSignle = '<span class="arr-item-sorted">'+sortedArr[i].toString()+'</span>';
    		initTemp += initSignle;
    	}
    	divResultArr.innerHTML = initTemp;
      visualImg.src = "img/"+name+".gif";
      algorithmIdeaText.innerHTML = eval(name+"Text");
      // initArr = [];
  });
}

// bubbltSort（冒泡排序）
let bubbleSort = function (arr){
	const times = arr.length;
	let temp;
	for (let i = 0; i < times; i++) {
		for (let j = 0; j < times-1-i; j++) {
			if (arr[j] > arr[j+1]) {
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
// use
showResult(btnBubbltSort,bubbleSort,"bubbleSort");

// a better bubbltSort(改良的冒泡排序)
function bubbleSortBetter(arr){
	const times = arr.length;
	let temp;
	for (let i = 0; i < times; i++) {
		for (let j = 0; j < times-1-i; j++) {
			if (arr[j] > arr[j+1]) {
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

// quickSort(快速排序)
let quickSort = function(arr) {
  if (arr.length < 1) { return arr; }
　　let pivotIndex = Math.floor(arr.length/2);
   let pivot = arr.splice(pivotIndex, 1)[0];
　　let left = [];
　　let right = [];
　　for (let i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i]);
　　　　} else {
　　　　　　right.push(arr[i]);
　　　　}
　　}
　　return quickSort(left).concat([pivot], quickSort(right));
};
// use
showResult(btnQuickSort,quickSort,"quickSort");

// array distinct（数组去重）  思路：如果临时数组中找不到该字符则添加进临时数组
function arrayDistinct1(arr){
	let times = arr.length;
	let tempArr =[];
	for (let i = 0; i < times; i++) {
		if (tempArr.indexOf(arr[i]) == -1) {
			tempArr.push(arr[i]);
		}
	}
	return tempArr;
}

//array distinct（数组去重） 思路：使用hash Map
function arrayDistinct2(arr){
	let times = arr.length;
	let tempArr = [];
	let hashMap = {};
	for (let i = 0; i < times; i++) {
		if (!hashMap[arr[i]]) {
		hashMap[arr[i]] = true;
		tempArr.push(arr[i]);
	}
	}
	return tempArr;
}

// array distinct（数组去重）  思路：如果字符在当前数组中第一次出现的位置不是当前遍历到的位置则说明重复
function arrayDistinct3(arr){
	let times = arr.length;
	let tempArr =[];
	for (let i = 0; i < times; i++) {
		if (arr.indexOf(arr[i]) == i) {
			tempArr.push(arr[i]);
		}
	}
	return tempArr;
}
