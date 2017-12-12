function findNode (tree, id) {

    if (!tree) return null;

    var node;

    for (const i in tree) {

        if (tree.hasOwnProperty(i)) {

            if (tree[i].id === id) {

                return tree[i];

            } else {

                node = findNode(tree[i].children, id);

            }
        }
    }

    return node;
}

var tree = [
    {
        children :  [
            {
                children : [
                    {
                        id : "aaa"
                    },
                    {
                        id : "aab"
                    }
                ],
                id : "aa"
            },
            {
                id : "ab"
            }
        ],
        id : "a"
    },
    {
        children :  [
            {
                children :  [
                    {

                        id : "baa"
                    },
                    {

                        id : "bab"
                    }
                ],
                id : "ba"
            },
            {
                children : [
                    {
                        children : [
                            {
                                children : [
                                    {
                                        children : [
                                            {
                                                children : [
                                                    {
                                                        children : [
                                                            {
                                                                children : [


                                                                ],
                                                                id : "bbaaaaaa"
                                                            },
                                                            {
                                                                children : [


                                                                ],
                                                                id : "bbaaaaab"
                                                            }
                                                        ],
                                                        id : "bbaaaaa"
                                                    },
                                                    {
                                                        children : [


                                                        ],
                                                        id : "bbaaaab"
                                                    }
                                                ],
                                                id : "bbaaaa"
                                            },
                                            {
                                                children : [


                                                ],
                                                id : "bbaaab"
                                            }
                                        ],
                                        id : "bbaaa"
                                    },
                                    {
                                        children : [


                                        ],
                                        id : "bbaab"
                                    }
                                ],
                                id : "bbaa"
                            },
                            {
                                children : [


                                ],
                                id : "bbab"
                            }
                        ],
                        id : "bba"
                    },
                    {
                        children : [
                            {
                                children : [
                                    {
                                        children : [


                                        ],
                                        id : "bbbaa"
                                    },
                                    {
                                        children : [


                                        ],
                                        id : "bbbab"
                                    }
                                ],
                                id : "bbba"
                            },
                            {
                                children : [


                                ],
                                id : "bbbb"
                            }
                        ],
                        id : "bbb"
                    }
                ],
                id : "bb"
            }
        ],
        id : "b"
    }
]


console.log(findNode(tree,"ab"))