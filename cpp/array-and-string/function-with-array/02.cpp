//passing multidimensional array to a function

#include<iostream>
using namespace std;
void display(int n[][2]){
  cout << " displaying value : " << endl;
  for(int i = 0; i< 3; ++i){
    for(int j =0 ; j<2; ++j){
      cout << "num[" << i << "][" << j << "]:" << n[i][j] << endl;
    }
  }
}
int main(){
  int num[3][2] = { {3,4},{9,5},{7,1}};
  display(num);
  return 0;
}