// an enum variable takes only one value out of many possible values. example to demonstrate it
 #include<iostream>
 using namespace std;
  enum suit {
    clube = 0,
    diamonds =10,
    hearts = 20 ,
    spades = 3 
  }card;
  int main()
  {
    card = club;
    cout << " Size of enum variable "<<sizeof(card)<<"bytes.";
    return 0;
  }