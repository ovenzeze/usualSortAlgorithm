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
let sortBtn = document.getElementById('sortBtn');
let distinctBtn = document.getElementById('distinctBtn');
let sortContent = document.getElementById('sortContent');
let distinctContent = document.getElementById('distinctContent');
let tips = document.getElementById("tips");
let visualImg = document.getElementById('visualImg');
let algorithmIdeaText = document.getElementById('algorithmIdea');
let btnBubbltSort = document.getElementById("btn1");
let btnBubbltSortFlag = document.getElementById("btn14");
let btnSelectionSort = document.getElementById("btn2");
let btnInsertionSort = document.getElementById("btn3");
let btnShellSort = document.getElementById("btn4");
let btnMergeSort = document.getElementById("btn5");
let btnQuickSort = document.getElementById("btn6");
let btnHeapSort = document.getElementById("btn7");
let btnCountingSort = document.getElementById("btn8");
let btnBucketSort = document.getElementById("btn9");
let btnRadixSort = document.getElementById("btn10");
let btnDistinct1 = document.getElementById("btn11");
let btnDistinct2 = document.getElementById("btn12");
let btnDistinct3 = document.getElementById("btn13");

// switch menu
sortBtn.onclick = function() { switchMenu("sortBtn") };
distinctBtn.onclick = function() { switchMenu("distinctBtn") };

function switchMenu(btnName) {
    btnName == "sortBtn" ? (distinctContent.style.display = "none", sortContent.style.display = "block") : (sortContent.style.display = "none", distinctContent.style.display = "block");
}
// create random array
// id:element you want to bind event
// length:length of the random array
function showInitArr(id, length) {
    id.addEventListener("click", function() {
        let initTemp = "";
        let initSignle = "";
        initArr = [];
        for (let i = 0; i < length; i++) {
            initArr[i] = Math.round(Math.random(i) * length);
            if ((i + 1) % 10 == 0) {
                initSignle = '<span class="arr-item">' + initArr[i].toString() + '</span></br><hr>';
            } else {
                initSignle = '<span class="arr-item">' + initArr[i].toString() + '</span>';
            }
            initTemp += initSignle;
        }
        divInitArr.innerHTML = initTemp;
    });
}
// use
showInitArr(randomArr20, 20);
showInitArr(randomArr5000, 5000);
showInitArr(randomArr10000, 10000);
showInitArr(randomArr50000, 50000);

// sort and updata DOM
// id:the element you want to bind event
// method:the sort function you wang to use
// name:the sort algorithm you used
function showResult(id, method, name) {
    id.addEventListener("click", function() {
        let initTemp = "";
        let initSignle = "";
        let initLength = initArr.length;
        let beginTime = (new Date()).getTime();
        let initArrCopy = initArr.slice(0); //slice会复制原数组，splice会切割（改变）原数组，数组保存的是引用类型
        console.log("正在排序");
        let sortedArr = method(initArrCopy);
        let sortedLength = sortedArr.length;
        console.log("排序完成");
        initArrCopy = initArr.slice(0);
        sortName.innerText = id.value;
        sortNum.innerText = initLength;
        sortTime.innerText = (new Date()).getTime() - beginTime;
        for (let i = 0; i < sortedLength; i++) {
            (i + 1) % 10 == 0 ? initSignle = '<span class="arr-item-sorted">' + sortedArr[i].toString() + '</span></br><hr>' : initSignle = '<span class="arr-item-sorted">' + sortedArr[i].toString() + '</span>';
            initTemp += initSignle;
        }
        divResultArr.innerHTML = initTemp;
        name == "arrayDistinct1" || name == "arrayDistinct2" || name == "arrayDistinct3" ?
            visualImg.src = "http://123.206.204.163:2333/media/no-image.gif" : visualImg.src = "http://123.206.204.163:2333/media/" + name + ".gif";
        algorithmIdeaText.innerHTML = eval(name + "Text");
    });
}

// bubbltSort（冒泡排序）
let bubbleSort = function(arr) {
        const times = arr.length;
        let temp;
        for (let i = 0; i < times; i++) {
            for (let j = 0; j < times - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    // use
showResult(btnBubbltSort, bubbleSort, "bubbleSort");

// a better bubbltSort(改良的冒泡排序)[使用flag标记]
let bubbleSortFlag = function(arr) {
    const times = arr.length;
    let temp;
    let flag = true;
    for (let i = 0; i < times; i++) {
        for (let j = 0; j < times - 1 - i; j++) {
            flag = false;
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                flag = true;
            }
        }
        if (!flag) {
            break;
        }
    }
    return arr;
}
showResult(btnBubbltSortFlag, bubbleSortFlag, "bubbleSortBetter");

// quickSort(快速排序)
let quickSort = function(arr) {
    if (arr.length < 1) {
        return arr; }　　
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];　　
    let left = [];　　
    let right = [];　　
    for (let i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　 left.push(arr[i]);　　　　 } else {　　　　　　 right.push(arr[i]);　　　　 }　　 }　　
    return quickSort(left).concat([pivot], quickSort(right));
};
// use
showResult(btnQuickSort, quickSort, "quickSort");

// selectionSort(选择排序)
let selectionSort = function(arr){
    let len = arr.length;
    let minIndex, temp;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
};
// use
showResult(btnSelectionSort, selectionSort, "selectionSort");

// insertionSort(插入排序)
let insertionSort = function(arr){
	let length = arr.length;
	let prevIndex,currentValue;
	for(let i = 1;i < length;i++){
		prevIndex = i - 1;
		currentValue = arr[i];
		while(prevIndex >= 0 && arr[prevIndex] > currentValue){
			arr[prevIndex+1] = arr[prevIndex];
			prevIndex--;
		}
		arr[prevIndex+1] = currentValue;

	}
	return arr;
};
// use
showResult(btnInsertionSort, insertionSort, "insertionSort");

// shellSort(希尔排序)
let shellSort = function(arr){
	    let len = arr.length,
	        temp,
	        gap = 1;
	    while (gap < len / 3) { //动态定义间隔序列
	        gap = gap * 3 + 1;
	    }
	    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
	        for (let i = gap; i < len; i++) {
	            temp = arr[i];
	            for (var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
	                arr[j + gap] = arr[j];
	            }
	            arr[j + gap] = temp;
	        }
	    }
	    return arr;

};
// use
showResult(btnShellSort, shellSort, "shellSort");

// mergeSort(归并排序)
let mergeSort = function(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
};

// use
showResult(btnMergeSort, mergeSort, "mergeSort");

// heapSort(堆排序)
function buildMaxHeap(arr) {   //建立大顶堆
    let len = arr.length;
    for (let i = Math.floor(len/2); i >= 0; i--) {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     //堆调整
	let len = arr.length;
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
	let len = arr.length;
    buildMaxHeap(arr);

    for (let i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i);
        len--;
        heapify(arr, 0);
    }
    return arr;
}
// use
showResult(btnHeapSort, heapSort, "heapSort");

// countingSort(计数排序)
let countingSort = function(arr) {
	var maxValue = arr[0];
	for (let i = 0; i < arr.length; i++) {
		arr[i] > maxValue ? maxValue = arr[i] : maxValue = maxValue;
	}
    let bucket = new Array(maxValue + 1),
        sortedIndex = 0;
    arrLen = arr.length,
        bucketLen = maxValue + 1;

    for (let i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }

    for (let j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }

    return arr;
};

// use
showResult(btnCountingSort, countingSort, "countingSort");

// bucketSort(桶排序)
let bucketSort = function(arr){
	let bucketSize;
	    if (arr.length === 0) {
      return arr;
    }

    var i;
    var minValue = arr[0];
    var maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < minValue) {
          minValue = arr[i];                //输入数据的最小值
      } else if (arr[i] > maxValue) {
          maxValue = arr[i];                //输入数据的最大值
      }
    }

    //桶的初始化
    var DEFAULT_BUCKET_SIZE = 100;            //设置桶的默认数量为5
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;   
    var buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    //利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }

    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                      //对每个桶进行排序，这里使用了插入排序
        for (var j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);                      
        }
    }

    return arr;
};
// use
showResult(btnBucketSort, bucketSort, "bucketSort");

// radixSort(基数排序)
let radixSort = function(arr){
		var maxDigit = arr[0];
	for (let i = 0; i < arr.length; i++) {
		arr[i] > maxDigit ? maxDigit = arr[i] : maxDigit = maxDigit;
	}
	let counter = [];
	    let mod = 10;
    let dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for(let j = 0; j < arr.length; j++) {
            let bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket]==null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for(let j = 0; j < counter.length; j++) {
            let value = null;
            if(counter[j]!=null) {
                while ((value = counter[j].shift()) != null) {
                      arr[pos++] = value;
                }
          }
        }
    }
    return arr;
};
// use
showResult(btnRadixSort, radixSort, "radixSort");

// array distinct（数组去重）  思路：如果临时数组中找不到该元素则添加进临时数组
function arrayDistinct1(arr) {
    let times = arr.length;
    let tempArr = [];
    for (let i = 0; i < times; i++) {
        if (tempArr.indexOf(arr[i]) == -1) { //如果数组中不存在此元素，则indexOf得到的值为-1
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
// use
showResult(btnDistinct1, arrayDistinct1, "arrayDistinct1");

//array distinct（数组去重） 思路：使用hash Map
function arrayDistinct2(arr) {
    let times = arr.length;
    let tempArr = [];
    let hashMap = {};
    for (let i = 0; i < times; i++) {
        if (!hashMap[arr[i]]) { //如果对象中不存在某个元素则把这个元素对应的键值设置为true,并这个元素放到新数组中
            hashMap[arr[i]] = true;
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
// use
showResult(btnDistinct2, arrayDistinct2, "arrayDistinct2");

// array distinct（数组去重）  思路：如果字符在当前数组中第一次出现的位置不是当前遍历到的位置则说明重复
function arrayDistinct3(arr) {
    let times = arr.length;
    let tempArr = [];
    for (let i = 0; i < times; i++) {
        if (arr.indexOf(arr[i]) == i) { //indexOf返回的是当前元素在数组中第一次出现的位置
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}
// use
showResult(btnDistinct3, arrayDistinct3, "arrayDistinct3");
