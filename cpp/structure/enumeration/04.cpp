///   use enums for flags 

#include<iostream>
using namespace std ;
 
 enum designFlags {
   BOLD = 1,
   ITALICS = 2,
   UNDERLINE = 4
 };
 int main(){
   int myDesign = BOLD | UNDERLINE;

   //     00000001
   //   | 00000100
   //   ______________
   //     00000101

   cout << myDesign << endl ;
   return 0;
 }