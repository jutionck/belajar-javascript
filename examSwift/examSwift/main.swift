//
//  main.swift
//  examSwift
//
//  Created by Jution Candra Kirana on 11/07/20.
//  Copyright © 2020 Dicoding Indonesia. All rights reserved.
//

import Foundation
class Person {
    let name: String
    init(name: String) { self.name = name; print("\(name) is being initialized") }
    deinit { print("\(name) is being deinitialized") }
}
var reference1: Person? = Person(name: "Dicoding indonesia")
var reference2: Person? = reference1
var reference3: Person? = reference1
reference1 = nil
reference2 = nil
