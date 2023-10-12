from reyyx.core.reyyx import Reyyx


class DocumentReyyx(Reyyx):
    def __init__(self, *args, **kwargs):
        self.args = args
        self.kwargs = kwargs


    # AQUI VAN LOS METODOS PROTEGIDOS LAS CLASES DE LOS MODELOS 
    class Objects(DocumentReyyx):
        def _get(self, name):
            pass
        def _set(self, name, campo, value):
            pass
        def _get_mamy(self, filters={}, cantidad=5):
            pass
        def _get_all(self):
            pass


    