// printing variable addresses 

#include<iostream>
using namespace std;

int main(){
   int var1 = 3;
   int var2 = 24;
   int var3 = 17;

   cout << "address of var1 : "<< &var1 << endl;
   cout << "address of var 2 : "<< &var2 << endl;
   cout << "address of var3 : " << &var3 << endl;
   return 0;
}