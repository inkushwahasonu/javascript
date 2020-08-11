// type casting

#include<iostream>
using namespace std;
int main()
{
  double  double_value = 3.67 ;
  cout << " double value : " << double_value << endl ;
  int int_value1 = (int)double_value ;
  cout << " int value 1 : " << int_value1 << endl ;
  int int_value2 = int(double_value);
  cout << " int value 2 : " << int_value2 << endl ;
  
  
  /*
  cout << int(double_value) << endl ;
  cout  << (int)double_value << endl ;
  cout << double_value << endl ; 
  */


  return 0;
}