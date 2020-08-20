// pass and return object from the fumction

#include<iostream>
using namespace std;
 class Complex{
   private:
   int real;
   int imag;
   public:
   Complex(): real(0), imag(0){ }
   void readData(){
     cout << "Enter real and imagenary number respectivly : "<<endl;
     cin >> real >> imag;
   }
   Complex addComplexNumbers(Complex comp2){
     Complex temp;
     temp.real = real+comp2.real;
     temp.imag = imag + comp2.real;
     return temp;
   }
   void displayData(){
     cout << " Sum = " <<real << " + " << imag << " i " << endl;
   }
 };
  int main()
  {
    Complex c1, c2, c3;
    c1.readData();
    c2.readData();
    c3 = c1.addComplexNumbers(c2);
    c3.displayData();
    return 0;
  }