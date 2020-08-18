// enter array and find average of them 

#include<iostream>
using namespace std;
int main(){
  double numbers[] = {7,2,4,1,5,4};
  double sum =0;
  double count = 0;
  double average;
  cout << " the numbers are : ";
  for (const double &n : numbers){
    cout << n << " ";
    sum +=n;
    ++count;
  }
  cout << "\n Their sum = " <<sum <<endl;
  average = sum / count;
  cout << "their average = " << average << endl ;
  return 0;
  
}

/*
#include<iostream>
using namespace std;
int main(){
  int num[0], n, sum = 0, average=0;
  cout << "enter number of element in array : " << endl;
  cin >> n ;
  cout << "enter elements in array : " << endl;
  for (int i = 0; i < n; ++i)
  {
    cin >> num[i];
  }
  cout << " the elements are : " ;
  for( int j=0; j<n; ++j){
    cout << num[j] << endl;
  }
  cout << "average of elements is : " << endl;
  for (int k = 0; k < n; ++k)
  {
    sum += num[k];
  }
  average = sum / n;
  cout << average << endl ;
  
  return 0;
}
*/