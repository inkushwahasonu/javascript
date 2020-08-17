// funcdtion overloading using defrent type of parameters

#include<iostream>
using namespace std;
 float absolute( float var ){
   if( var < 0 ){
   var = -var;
   }
   return var ;
 }
 int absolute( int var ){
   if (var < 0)
   {
     var = -var ;
   }
     return var;
   
   
 }
 int main(){
   cout << "absolute value of -5 : " << absolute(-5) << endl ;
   cout << "absolute value of  5.5: " << absolute(5.5f) <<endl;
   return 0;
 }