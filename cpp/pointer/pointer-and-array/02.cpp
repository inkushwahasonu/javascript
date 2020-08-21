//insert and print data entered by using pointer notation

#include <iostream>
using namespace std;
int main()
{
  float arr[5];
  cout << " enter 5 numbers : " << endl;
  for (int i = 0; i < 5; ++i)
  {
    cin >> *(arr + i);
  }
  cout << "displaying data : " << endl;
  for (int i = 0; i < 5; ++i)
  {
    cout << *(arr + i) << endl;
  }
  return 0;
}