from pickle import TRUE


x = {'a': 1,
     'b': 2}

print(x.keys())


class Pet():
    def __init__(self) -> None:
        self.sleepy = True

    def nap(self):
        self.sleepy = False


dog = Pet()
print(dog.sleepy)
dog.nap()
print(dog.sleepy)
