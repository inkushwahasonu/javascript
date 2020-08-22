// Abstract class and pure virtual function


#include<iostream>
using namespace std ;

class Shape{
  protected:
  float l;
  public:
  void getData(){
    cin >> l;
  }

  virtual float calculateArea() = 0;
};

class Square : public Shape{
  public:
  float calculateArea(){
    return l*l;
  }
};
class Circle : public Shape{
  public:
  float calculateArea(){
    return 3.14*l*l;
  }
};

int main(){
  Square s;
  Circle c;

  cout << " enter length to calculate the area of a cquare : ";
  s.getData();
  cout << "Area of square : " << s.calculateArea() << endl ;
  cout <<"\n Enter radius to calculate the area of a circle : ";
  c.getData();
  cout << " Area of circle : " << c.calculateArea() << endl;
  return 0;
}
