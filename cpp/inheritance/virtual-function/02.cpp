//  virtual function to solv the problem

#include <iostream>
using namespace std;
class Weapon
{
public:
  virtual void features() { cout << "Loading weaponfeatures.\n" ;}
};
class Bomb : public Weapon
{
public:
  void features()
  {
    this->Weapon::features();
    cout << "Loading bomb features .\n";
  }
};
class Gun : public Weapon
{
public:
  void features()
  {
    this->Weapon::features();
    cout << "Loading gun features.\n";
  }
};

class Loader
{
public:
  void loadFeatures(Weapon *weapon)
  {
    weapon->features();
  }
};

int main()
{
  Loader *l = new Loader;
  Weapon *w;
  Bomb b;
  Gun g;
  w = &b;
  l->loadFeatures(w);
  w = &g;
  l->loadFeatures(w);
  return 0;
}