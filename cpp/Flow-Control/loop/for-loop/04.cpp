// range based for loop 

#include<iostream>
using namespace std;
int main() {
    int num_array[] ={ 1, 2, 3, 4, 5, 6, 7, 3, 5, 6, };
    for (int n: num_array) {
        cout << n << " ";
    }
    return 0;
}