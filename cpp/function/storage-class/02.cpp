// global variable
#include<iostream>
using namespace std;
int c = 12;
void test();
int main(){
  ++c;
  cout << c <<endl;
  test();
  return 0;
}
void test()
{
  ++c;
  cout <<c;
}