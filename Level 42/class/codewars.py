# def check_alive(health):
    
#     if health > 0:
#         return True
    
#     else:
#         return False


def grow(arr):
    
    res = 1
    
    for i in arr:
    
        res *= i
    
    return res