
class Reyyx(object):
    def __init__(self):
        pass

    def get_intance(self,  name):
        model = self.__class__()
        model.Objects.__get(self, name)
        
