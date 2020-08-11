#include<iostream>
using namespace std ;
int main ()
{
  int num;
  cout << " Enter any number ( positive or negative ) : " << endl ;
  cin >> num ;
  
  if ( num < 0) {
    cout << num << " is a negative value ." << endl ;
  }
  else if ( num > 0 ) {
    cout << num << " is a positive value ." << endl ;
  }
  else {
    cout << " you entered 0." << endl ;
  }
}  