// function overloading using deferent number of parameters
  #include<iostream>
  using namespace std;

  void display( int var1, double var2){
    cout << "integer number : "<< var1 ;
    cout << ", and double number : " << var2 << endl;
  }
  void display( int var){
    cout << "integer number : " << var << endl;
  }
  void display(double var ){
    cout << "integer number : " << var << endl ;
  }
  int main(){
    int a = 5;
    double b = 5.5;

    display ( a );
    display ( b );
    display (a,b);
    return 0;
  }