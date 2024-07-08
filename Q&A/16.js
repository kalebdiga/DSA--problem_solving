/**
 * For this exercise you will be strengthening your page-fu mastery. 
 * You will complete the PaginationHelper class, which is a utility
 *  class helpful for querying paging information related to an array.
 * The class is designed to take in an array of values and an integer 
 * indicating how many items will be allowed per each page. The types 
 * of values contained within the collection/array are not relevant.
 * The following are some examples of how this class is used:
 * 
 * 
 * Example
 * 
 * var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
 * helper.pageCount(); // should == 2
 * helper.itemCount(); // should == 6
 * helper.pageItemCount(0); // should == 4
 * helper.pageItemCount(1); // last page - should == 2
 * helper.pageItemCount(2); // should == -1 since the page is invalid
 * 
 * solutin breakdow
 * type of data not relevant
 * 
 * input array and intiger to amount
 * itemCount()-> array of data length
 * pageCount()-> array of data / intiger
 * pageItemCount()-> {
 * 
 * if itme count< intiger push item to array
 * 
 * }
 * 
 *   if(item count>intiger){
 *   for( i<2){
 *    
 * 
 * }
 * 
 * }

 *

 */


class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
	
	this.collection=collection,
	// console.log(this.collection);
	this.itemsPerPage=itemsPerPage
	this.pagination=[]
	}
	itemCount() {
	// returns the number of items within the entire collection
	return this.collection.length
	// Math.ceil(this.collection.length)
	}
	pageCount() {
	// returns the number of pages
	return Math.ceil(this.itemCount()/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
	// console.log("object", pageIndex);
		if (this.collection.length<= this.itemsPerPage){
   

			this.pagination.push(this.collection.length)


			if(this.pagination[pageIndex]===undefined){
				return -1
			}

          return pageIndex!==undefined?this.pagination[pageIndex]:this.pagination

		}
     else{
		let total=this.collection.length
		let items=this.itemsPerPage

		for (let i = 0; i < 3; i++) {
			// console.log("total", total);

            if(total>items){

				this.pagination.push(items)
				total=total-items

			}			
			
		}
		if(total<items){
			// console.log("total1", total);
			this.pagination.push(total)
			// total=total-items

		}
		
		if(pageIndex!==undefined&&this.pagination[pageIndex]===undefined){
			return -1
		}        
		  return pageIndex!==undefined?this.pagination[pageIndex]:this.pagination

		
	 
		}
	 

		
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
	}
	pageIndex(itemIndex) {

		if (itemIndex > this.itemCount() - 1 || itemIndex < 0) {
			return -1;
		  }
		  
		  return Math.ceil((itemIndex + 1)/this.itemsPerPage) - 1;
		
		
		
		// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
	}
}
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10)


// var helper = new PaginationHelper(['a','b','c','d','e','f',"g",'h','i'], 4)
console.log(helper.itemCount());

// console.log(helper.pageCount());
// console.log(helper.pageItemCount(3));
// console.log(helper.pageIndex(3));