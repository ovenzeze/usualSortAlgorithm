# usualSortAlgorithm(常用排序算法)
this is a website of usual sorting algorithm,include demo,idea,performance and visualazation.  
(常用的算法的前端实现，包含示例，性能记录，实现思路和算法可视化)       
使用网址：[https://ovenzeze.github.io/usualSortAlgorithm/](https://ovenzeze.github.io/usualSortAlgorithm/)
# 目录
## 冒泡排序
冒泡排序算法的运作如下：（从后往前)
1: 比较相邻的元素。 如果第一个比第二个大， 就交换他们两个。
2: 对每一对相邻元素作同样的工作， 从开始第一对到结尾的最后一对。 在这一点， 最后的元素应该会是最大的数。
3: 针对所有的元素重复以上的步骤， 除了最后一个。
4: 持续每次对越来越少的元素重复上面的步骤， 直到没有任何一对数字需要比较。  
**算法可视化如下：**
![冒泡排序](http://123.206.204.163:2333/media/bubbleSort.gif)
## 冒泡排序(使用flag标记)
原始的冒泡排序相对而言是非常耗时的，即使一个数组经过几轮交换已经变的有序了，例如`[2,1,3,4,5,6,7]`这个数组，经过第一轮，已经变成有序的了，但顽固的冒泡还是要继续进行没有营养的两两比较，从而牺牲了时间。  
如果用一个flag来判断一下，当前数组是否已经有序，如果有序就退出循环，这样可以明显的提高冒泡排序的表现。
## 选择排序
对比数组中前一个元素跟后一个元素的大小，如果后面的元素比前面的元素小则用一个变量k来记住他的位置，接着第二次比较，前面“后一个元素”现变成了“前一个元素”，继续跟他的“后一个元素”进行比较如果后面的元素比他要小则用变量k记住它在数组中的位置(下标)，等到循环结束的时候，我们应该找到了最小的那个数的下标了，然后进行判断，如果这个元素的下标不是第一个元素的下标，就让第一个元素跟他交换一下值，这样就找到整个数组中最小的数了。然后找到数组中第二小的数，让他跟数组中第二个元素交换一下值，以此类推。  
**算法可视化如下：**
![选择排序](http://123.206.204.163:2333/media/selectionSort.gif)
## 快速排序（递归）
设要排序的数组是A[0]……A[N-1]，首先任意选取一个数据 （通常选用数组的第一个数）作为关键数据，然后将所有比它小的数都放到它前面，所有比它大的数都放到它后面，这个过程称为一趟快速排序。值得注意的是，快速排序不是一种稳定的排序算法，也就是说，多个相同的值的相对位置也许会在算法结束时产生变动。一趟快速排序的算法是：
1）设置两个变量i、j，排序开始的时候：i=0，j=N-1；
2）以第一个数组元素作为关键数据，赋值给key，即key=A[0]；
3）从j开始向前搜索，即由后开始向前搜索(j--)，找到第一个小于key的值A[j]，将A[j]和A[i]互换；
4）从i开始向后搜索，即由前开始向后搜索(i++)，找到第一个大于key的A[i]，将A[i]和A[j]互换；
5）重复第3、4步，直到i=j； (3,4步中，没找到符合条件的值，即3中A[j]不小于key,4中A[i]不大于key的时候改变j、i的值，使得j=j-1，i=i+1，直至找到为止。 找到符合条件的值，进行交换的时候i， j指针位置不变。另外，i==j这一过程一定正好是i+或j-完成的时候，此时令循环结束）。  
  **算法可视化如下：**
  ![选择排序](http://123.206.204.163:2333/media/quickSort.gif)

## 插入排序
有一个已经有序的数据序列，要求在这个已经排好的数据序列中插入一个数，但要求插入后此数据序列仍然有序，这个时候就要用到一种新的排序方法——插入排序法,插入排序的基本操作就是将一个数据插入到已经排好序的有序数据中，从而得到一个新的、个数加一的有序数据，算法适用于少量数据的排序，时间复杂度为O(n^2)。是稳定的排序方法。插入算法把要排序的数组分成两部分：第一部分包含了这个数组的所有元素，但将最后一个元素除外（让数组多一个空间才有插入的位置），而第二部分就只包含这一个元素（即待插入元素）。在第一部分排序完成后，再将这个最后元素插入到已排好序的第一部分中。
插入排序的基本思想是：每步将一个待排序的纪录，按其关键码值的大小插入前面已经排序的文件中适当位置上，直到全部插入完为止。  
算法流程如下：  
直接插入排序是一种简单的插入排序法，其基本思想是：把待排序的纪录按其关键码值的大小逐个插入到一个已经排好序的有序序列中，直到所有的纪录插入完为止，得到一个新的有序序列[1]   
例如,已知待排序的一组纪录是：  
60,71,49,11,24,3,66  
假设在排序过程中，前3个纪录已按关键码值递增的次序重新排列，构成一个有序序列：  
49,60,71  
将待排序纪录中的第4个纪录（即11）插入上述有序序列，以得到一个新的含4个纪录的有序序列。     
首先，应找到11的插入位置，再进行插入。可以讲11放入数组的第一个单元r[0]中，这个单元称为监视哨，然后从71起从右到左查找，11小于71，将71右移一个位置，11小于60，又将60右移一个位置，11小于49，又再将49右移一个位置，这时再将11与r[0]的值比较，11≥r[0]，它的插入位置就是r[1]。假设11大于第一个值r[1]。它的插入位置应该在r[1]和r[2]之间，由于60已经右移了，留出来的位置正好留给11.后面的纪录依照同样的方法逐个插入到该有序序列中。若纪录数n,续进行n-1趟排序，才能完成。  
直接插入排序的算法思路：  
（1） 设置监视哨r[0]，将待插入纪录的值赋值给r[0]；  
（2） 设置开始查找的位置j；  
（3） 在数组中进行搜索，搜索中将第j个纪录后移，直至r[0].key≥r[j].key为止；  
（4） 将r[0]插入r[j+1]的位置上。  
**算法可视化如下：**
![选择排序](http://123.206.204.163:2333/media/insertionSort.gif)
## 归并排序
归并排序（MERGE-SORT）是建立在归并操作上的一种有效的排序算法,该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为二路归并。  
归并过程为：  
比较a[i]和a[j]的大小，若a[i]≤a[j]，则将第一个有序表中的元素a[i]复制到r[k]中，并令i和k分别加上1；否则将第二个有序表中的元素a[j]复制到r[k]中，并令j和k分别加上1，如此循环下去，直到其中一个有序表取完，然后再将另一个有序表中剩余的元素复制到r中从下标k到下标t的单元。归并排序的算法我们通常用递归实现，先把待排序区间[s,t]以中点二分，接着把左边子区间排序，再把右边子区间排序，最后把左区间和右区间用一次归并操作合并成有序的区间[s,t]。  
算法流程如下：
如　设有数列{6，202，100，301，38，8，1}  
初始状态：6,202,100,301,38,8，1  
第一次归并后：{6,202},{100,301},{8,38},{1}，比较次数：3；  
第二次归并后：{6,100,202,301}，{1,8,38}，比较次数：4；  
第三次归并后：{1,6,8,38,100,202,301},比较次数：4；  
总的比较次数为：3+4+4=11,；  
逆序数为14；  
**算法可视化如下：**
![选择排序](http://123.206.204.163:2333/media/mergeSort.gif)
## 桶排序
桶排序 (Bucket sort)或所谓的箱排序，是一个排序算法，工作的原理是将数组分到有限数量的桶子里。每个桶子再个别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）。桶排序是鸽巢排序的一种归纳结果。当要被排序的数组内的数值是均匀分配的时候，桶排序使用线性时间（Θ（n））。但桶排序并不是 比较排序，他不受到 O(n log n) 下限的影响。  
## 堆排序
堆排序(Heapsort)是指利用堆积树（堆）这种数据结构所设计的一种排序算法，它是选择排序的一种。可以利用数组的特点快速定位指定索引的元素。堆分为大根堆和小根堆，是完全二叉树。大根堆的要求是每个节点的值都不大于其父节点的值，即A[PARENT[i]] >= A[i]。在数组的非降序排序中，需要使用的就是大根堆，因为根据大根堆的要求可知，最大的值一定在堆顶。
算法流程：(这个不是很懂)
关键字序列（10，15，56，25，30，70）和（70，56，30，25，15，10）分别满足堆性质（1）和（2），故它们均是堆，其对应的完全二叉树分别如小根堆示例和大根堆示例所示。  
大根堆和小根堆：根结点（亦称为堆顶）的关键字是堆里所有结点关键字中最小者的堆称为小根堆，又称最小堆。根结点（亦称为堆顶）的关键字是堆里所有结点关键字中最大者，称为大根堆，又称最大堆。  
注意：  
①堆中任一子树亦是堆。  
②以上讨论的堆实际上是二叉堆（Binary Heap），类似地可定义k叉堆。  
**算法可视化如下：**
![选择排序](http://123.206.204.163:2333/media/heapSort.gif)
## 基数排序

## 希尔排序
## 数组去重（一）
## 数组去重（二）
## 数组去重（三）
