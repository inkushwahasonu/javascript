#include<iostream>
using namespace std;
int main(){
  float num, average, sum = 0.0 ;
  int i, n;
  cout << " enter maximum number of input : " << endl ;
  cin >> n ;
  for (i=0; i<=n; ++i){
    cout << " Enter n  " << i <<":"<<endl;
    cin>> num ;
    if(num<0.0){
      goto  jump;
    }
    sum +=num;

  }
  jump : 
  average = sum/(i-1);
  cout << " \n average : " << average <<endl;
  return 0 ;

}