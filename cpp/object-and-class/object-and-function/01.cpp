// pass object to function

#include<iostream>
using namespace std;
class Complex
{
  private:
  int real;
  int imag;
  public :
  Complex(): real(0) , imag(0){ }
  void readData(){
    cout << "enter real and immaginary number respectively : " << endl;
    cin >> real >> imag;

  }
  void addComplexNumbers(Complex comp1, Complex comp2){
    real=comp1.real+comp2.real;
    imag=comp1.imag+comp2.imag;
  }
  void displaySum(){
    cout << "sum = " << real << " + " << imag << " i " << endl;

  }
};

int main(){
  Complex c1, c2, c3;
  c1.readData();
  c2.readData();
  c3.addComplexNumbers(c1, c2);
  c3.displaySum();
  return 0;
}