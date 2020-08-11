// nested if-else

#include<iostream>
using namespace std ;

int main()
{
  int num ;
   cout << " Enter any positive number : " << endl ;
   cin >> num ;

   if(num != 0){
   
    if ( (num % 2 ) == 0) {
      cout << num << " is an even number ." << endl ;
    }
    if ( (num % 2) != 0 ){
      cout << num << " is an odd number ." << endl ;
    }
    else{
      cout << " you entered 0 and it is nither even  nor odd number . " << endl ;

    }
   }
   return 0 ;
}