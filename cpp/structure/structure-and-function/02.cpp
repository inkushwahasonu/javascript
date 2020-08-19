// returning structure from function in c++

#include<iostream>
using namespace std;

struct Person{
  char name[50];
  int age;
  float salary;

};

Person getData(Person);
void displayData(Person);
int main(){
  Person p;

  p = getData(p);
  displayData(p);
  return 0;
}
Person getData(Person p){
  cout << "enter full name : ";
  cin.get(p.name, 50);
  cout << "enter age : ";
  cin >> p.age;
  cout << "enter salary : ";
  cin >> p.salary;
  return p;
}

void displayData(Person p){
  cout << "\nDisplaying Information . "<< endl;
  cout << "name : "<<p.name << endl;
  cout<<"age : "<<p.age<<endl;
  cout <<"salary : "<<p.salary;
}
