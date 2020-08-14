/// sum of positive numbers only

#include <iostream>
using namespace std;

int main()
{
  int num = 0, sum;
  sum = 0;
  do
  {
    sum += num;
    cout << " enter number : " << endl;
    cin >> num;
  } while (num >= 0);
  cout << " \n sum is : " << sum << endl;
  return 0;
}