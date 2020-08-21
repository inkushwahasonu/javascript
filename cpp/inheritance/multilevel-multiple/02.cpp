// multiple inheritance


#include<iostream>
using namespace std;
class Mammal{
  public : 
  Mammal(){
    cout << " Mammals can give direct birth. "<< endl;
    
  }
};
class WingedAnimal{
  public:
  WingedAnimal(){
    cout << "Wnged animal can flop. "<< endl;
  }
};
class Bat: public Mammal, public WingedAnimal {

};

int main()
{
    Bat b1;
    return 0;
}